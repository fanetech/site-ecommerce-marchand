<?php

namespace App\Controller;

use App\Entity\Marchand;
use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use App\Service\UploaderFileService;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/product')]
class ProductController extends AbstractController
{
    #[Route('/add', name: 'api.product.add', methods: "POST")]
    public function add(Request $request, UploaderFileService $uploader, ProductRepository $repo): JsonResponse
    {
        $data = $request->getContent();
        $dataJson = json_decode($data);
        $file = $request->files->get('file');
        $category = $request->request->get('category');
        $title = $request->request->get('title');
        $description = $request->request->get('description');
        $initialPrice = $request->request->get('initialPrice');
        $stock = $request->request->get('stock');
        $marchandId = $request->request->get('marchandId');
        //dd($file);

        if ($file && $category && $title && $description && $initialPrice && $stock && $marchandId) {
            //select file directory
            $dossier = $this->getParameter("images_directory");
            //call service for upload file       
            $fileName = $uploader->uploader($file, $dossier);

            $product = new Product();
            $product->setCategory($category);
            $product->setDescription($description);
            $product->setTitle($title);
            $product->setInitialPrice($initialPrice);
            $product->setStock($stock);
            $product->setSupplyTime(new DateTime());
            $product->setPicture($fileName);
            $product->setMarchandId($marchandId);

            $repo->add($product, true);
            return $this->json([
                'msg' => 'success',
                'product' => $product
            ]);
        }

        return $this->json([
            'msg' => 'error',
            'content' => 'information invalide. Veuillez ré-essayer',
        ]);
    }

    #[Route('/show/alls', name: 'api.product.show.alls', methods: "GET")]
    public function showAlls(ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Product::class);
        $products = $repository->findAll();
        if (!$products) {
            return $this->json([
                'msg' => 'error',
                'content' => 'Aucun produit trouvé',
            ]);
        }
        return $this->json([
            'msg' => 'success',
            'products' => $products,
        ]);
    }

    #[Route('/show/detail/{id}', name: 'api.product.show.detail', methods: "GET")]
    public function showDetail(Product $product = null): JsonResponse
    {
        if (!$product) {
            return $this->json([
                'msg' => 'error',
                'content' => 'Product non trouvé',
            ]);
        }
        return $this->json([
            'msg' => 'success',
            'products' => $product,
        ]);
    }
    #[Route('/show/marchand/product/{id}', name: 'api.product.show.detail', methods: "GET")]
    public function showMarchandProduct($id, ManagerRegistry $doctrine): JsonResponse
    {
        $repository = $doctrine->getRepository(Product::class);
        $products = $repository->findBy(["marchandId" => $id]);
        if (!$products) {
            return $this->json([
                'msg' => 'error',
                'content' => 'Aucun produit trouvé pour ce marchand',
            ]);
        }
        return $this->json([
            'msg' => 'success',
            'products' => $products,
        ]);
    }

    #[Route('/edit/{id}', name: 'api.product.edit', methods: "PUT")]
    public function edit(Product $product = null, Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        //dd($product);
        if ($product) {
            $data = $request->getContent();
            $dataJson = json_decode($data, true);
            if ($dataJson) {
                //file form with field send
                $form = $this->createForm(ProductType::class, $product);
                $form->submit($dataJson);

                //send to DB
                $manager = $doctrine->getManager();
                $manager->flush();
                return $this->json([
                    'msg' => 'success',
                    'product' => $product
                ]);
            }
            return $this->json([
                'msg' => 'error',
                'content' => 'Information invalide',
            ]);
        }
        return $this->json([
            'msg' => 'error',
            'content' => 'Aucun produit',
        ]);
    }
    #[Route('/delete/{id}', name: 'api.product.delete', methods: "DELETE")]
    public function delete(Product $product = null, ProductRepository $repo): JsonResponse
    {
        if (!$product) {
            return $this->json([
                'msg' => 'error',
                'content' => 'Produit non trouvé',
            ]);
            $repo->remove($product, true);
            return $this->json([
                'msg' => 'success',
                'content' => 'Produit supprimé avec succès',
            ]);
        }
    }
    #[Route('/upload', name: 'api.product.upload', methods: 'POST')]
    public function upload(Request $request, UploaderFileService $uploader, ManagerRegistry $doctrine, ProductRepository $repo)
    {

        //get file and directory
        $file = $request->files->get('file');
        $productId = $request->request->get('productId');

        if (!$productId || !$file) {
            return $this->json([
                "msg" => "error",
                "content" => "information invalide"
            ]);
        }

        $repository = $doctrine->getRepository(Product::class);
        $product = $repository->find($productId);
        if (!$product) {
            return $this->json([
                "msg" => "error",
                "content" => "aucun produit trouvé"
            ]);
        }
        //ajouter la verification du mimetype
        //....
        //select file directory
        $dossier = $this->getParameter("images_directory");
        //call service for upload file       
        $fileName = $uploader->uploader($file, $dossier);
        $product->setPicture($fileName);
        $repo->add($product, true);
        return $this->json([
            "msg" => "success",
            "content" => "image enregistré avec succès"
        ]);
    }
}

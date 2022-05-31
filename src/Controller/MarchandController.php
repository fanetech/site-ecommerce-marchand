<?php

namespace App\Controller;

use App\Entity\Marchand;
use App\Entity\User;
use App\Form\MarchandType;
use App\Repository\MarchandRepository;
use App\Service\UploaderFileService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/marchand')]
class MarchandController extends AbstractController
{
    #[Route('/add', name: 'marchand.add', methods: 'POST')]
    public function add(Request $request, MarchandRepository $repo, ManagerRegistry $doctrine): JsonResponse
    {
        $data = $request->getContent();
        $dataJson = json_decode($data);
        if (property_exists($dataJson, 'email') && property_exists($dataJson, 'name') && property_exists($dataJson, 'firstName') && property_exists($dataJson, 'storeName') && property_exists($dataJson, 'phone') && property_exists($dataJson, 'description') && property_exists($dataJson, 'legalPage') && property_exists($dataJson, 'sellPage') && property_exists($dataJson, 'useTerme') && property_exists($dataJson, 'faq')) {
            $repository = $doctrine->getRepository(Marchand::class);
            $storeExist = $repository->findBy(['storeName' => $dataJson->storeName]);

            //check il store name exist
            if ($storeExist) {
                return $this->json([
                    'msg' => 'error',
                    'content' => 'Nom de boutique déja utiliser. veuillez le changé',
                ], Response::HTTP_ACCEPTED);
            }

            //verify if email exist in user table
            $repository = $doctrine->getRepository(User::class);
            $userExist = $repository->findBy(['email' => $dataJson->email]);
            if ($userExist) {
                return $this->json([
                    'msg' => 'error',
                    'content' => 'Email déja utiliser',
                ], Response::HTTP_ACCEPTED);
            }
            //irigation object
            $marchand = new Marchand();
            $marchand->setName($dataJson->name);
            $marchand->setFirstName($dataJson->firstName);
            $marchand->setStoreName($dataJson->storeName);
            $marchand->setPhone($dataJson->phone);
            $marchand->setStoreDescription($dataJson->description);
            $marchand->setLegalPage($dataJson->legalPage);
            $marchand->setSellPage($dataJson->sellPage);
            $marchand->setUseTerme($dataJson->useTerme);
            $marchand->setFaq($dataJson->faq);

            //send to DB
            //dd($marchand);
            $manager = $doctrine->getManager();
            $manager->persist($marchand);
            $manager->flush();

            return $this->json([
                'msg' => 'success',
                'marchand' => $marchand,
            ]);
        }


        return $this->json([
            'msg' => 'error',
            'content' => 'information invalide. veuillez recommancé',
        ]);
    }
    #[Route('/show/all', name: 'api.marchand.show.all', methods: 'GET')]
    public function showAll(ManagerRegistry $doctrine): JsonResponse
    {
        $registry = $doctrine->getRepository(Marchand::class);
        $marchand = $registry->findAll();
        if ($marchand) {

            return $this->json([
                'msg' => 'success',
                'marchands' => $marchand
            ]);
        }
        return $this->json([
            'msg' => 'error',
            'content' => "Pas de marchands"
        ]);
    }
    #[Route('/{id}/detail', name: 'api.marchand.detail', methods: 'GET')]
    public function detail(Marchand $marchand = null): JsonResponse
    {
        if ($marchand) {
            return $this->json([
                'msg' => 'success',
                'marchand' => $marchand
            ]);
        }
        return $this->json([
            'msg' => 'error',
            'content' => "Marchand non trouvé"
        ]);
    }
    #[Route('/edit/{id}', name: 'api.marchand.edit', methods: 'PUT')]
    public function edit(Marchand $marchand = null, ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        if ($marchand) {
            //get request
            $data = $request->getContent();

            //decode request
            $dataJson = json_decode($data, true);

            if ($dataJson) {
                //file form with field send
                $form = $this->createForm(MarchandType::class, $marchand);
                $form->submit($dataJson);

                //send to DB
                $manager = $doctrine->getManager();
                $manager->flush();

                //send to response
                //return new JsonResponse($dataJson);
                return $this->json([
                    'msg' => 'success',
                    'content' => $dataJson
                ]);
            }
            //if error response
            return $this->json([
                'msg' => 'error',
                'content' => "information invalide"
            ]);
        }

        //if error response
        return $this->json([
            'msg' => 'error',
            'content' => "Utilisateur non trouvé"
        ]);
    }
    #[Route('/delete/{id}', name: 'api.marchand.delete', methods: 'DELETE')]
    public function delete(Marchand $marchand, MarchandRepository $repo): JsonResponse
    {
        if ($marchand) {

            $repo->remove($marchand, true);
            return $this->json([
                'msg' => 'success',
                'content' => "utilisateur supprimé avec succès"
            ]);
        }
        return $this->json([
            "msg" => 'error',
            "content" => 'Utilisateur non trouvé'
        ]);
    }
    #[Route('/upload', name: 'api.marchand.upload', methods: 'POST')]
    public function upload(Request $request, UploaderFileService $uploader, ManagerRegistry $doctrine, MarchandRepository $repo)
    {

        //get file and directory
        $file = $request->files->get('file');
        $path = $request->request->get('directory');
        $id = $request->request->get('id');
        $typePic = $request->request->get('typePic');
        $repository = $doctrine->getRepository(Marchand::class);
        $marchand = $repository->find($id);
        if ($file && ($path === 'store' || $path === 'user') && $marchand && ($typePic === "logo" || $typePic === "ban")) {

            //ajouter la verification du mimetype
            //....
            //select file directory
            if ($path === 'store') $dossier = $this->getParameter("storesPic_directory");
            //call service for upload file       
            $fileName = $uploader->uploader($file, $dossier, $id);

            //send file name to, DB
            if ($typePic === 'logo') $marchand->setLogo($fileName);
            if ($typePic === 'ban') $marchand->setBanniere($fileName);
            $repo->add($marchand, true);

            //dd($file);
            return $this->json([
                "msg" => "success",
                "content" => "image enregistré avec succès"
            ]);
        }
        return $this->json([
            "msg" => "error",
            "content" => "information invalide"
        ]);
    }
}

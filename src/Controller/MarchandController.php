<?php

namespace App\Controller;

use App\Entity\Marchand;
use App\Repository\MarchandRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/marchand')]
class MarchandController extends AbstractController
{
    #[Route('/add', name: 'marchand.add', methods: 'POST')]
    public function add(Request $request, MarchandRepository $repo, ManagerRegistry $doctrine): JsonResponse
    {
        $data = $request->getContent();
        $dataJson = json_decode($data);
        if (property_exists($dataJson, 'name') && property_exists($dataJson, 'firstName') && property_exists($dataJson, 'storeName') && property_exists($dataJson, 'phone') && property_exists($dataJson, 'description') && property_exists($dataJson, 'legalPage') && property_exists($dataJson, 'sellPage') && property_exists($dataJson, 'userTerm') && property_exists($dataJson, 'faq')) {
            //irigation object
            $marchand = new Marchand();
            $marchand->setName($dataJson->name);
            $marchand->setFirstName($dataJson->firstName);
            $marchand->setStoreName($dataJson->storeName);
            $marchand->setPhone($dataJson->phone);
            $marchand->setStoreDescription($dataJson->description);
            $marchand->setLegalPage($dataJson->legalPage);
            $marchand->setSellPage($dataJson->sellPage);
            $marchand->setUseTerme($dataJson->userTerm);
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
            'content' => 'information invalide',
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
    //#[Route('/{id}/edit', name: 'api.marchand.edit', methods: 'PUT')]
    //public function edit(Marchand $marchand, MarchandRepository $repo, ManagerRegistry $doctrine): JsonResponse
    //{
    //    if ($marchand) {
    //        //$repo->add($marchand, true);
    //        $manager = $doctrine->getManager();
    //        $manager->persist($marchand);
    //        $manager->flush();
    //        dd($marchand);
    //    }
    //    return $this->json([
    //        'msg' => 'error',
    //        'content' => "Pas de marchands"
    //    ]);
    //}
}

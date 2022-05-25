<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

#[Route('api/authenticator')]
class AuthenticatorController extends AbstractController
{
    //private $token;
    //private $user;
    //public function __construct(TokenStorageInterface $tokenStorage)
    //{
    //    $this->token = $tokenStorage->getToken();
    //    $user = $this->token->getUser();
    //    $jwtManager = $this->get('lexik_jwt_authentication.jwt_manager');
    //    $token = $jwtManager->create($user);
    //}
    #[Route('/register', name: 'api.authenticator.register', methods: "POST")]
    public function register(Request $request, UserPasswordHasherInterface $hasher, ManagerRegistry $doctrine): JsonResponse
    {
        //Recupération de la request
        $data =  $request->getContent();
        //décodage de la data
        $dataJson = json_decode($data);

        //vérification si tout les champs on été envoyé puis envoi dans la DB
        if (property_exists($dataJson, 'email') && property_exists($dataJson, 'password') && property_exists($dataJson, 'role')) {
            $user = new User();
            $user->setEmail($dataJson->email);
            $user->setRoles([$dataJson->role]);

            //encodage du mot de passe
            $passwordClair = $dataJson->password;
            $passwordHash = $hasher->hashPassword($user, $passwordClair);

            //enregistrement du mot de passe dans le DB
            $user->setPassword($passwordHash);

            //envoi et enregistrement de la data dans la DB
            $manager = $doctrine->getManager();
            $manager->persist($user);
            $manager->flush();
            return $this->json([
                'msg' => 'sucess',
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'roles' => $user->getRoles()
            ], Response::HTTP_CREATED);
        }
        return $this->json([
            'msg' => 'error',
            'content' => 'Donnés nos valide',
        ], Response::HTTP_UNAUTHORIZED);
    }
    #[Route('/login', name: 'api.authenticator.login', methods: "POST")]
    public function login(?User $user, JWTTokenManagerInterface $JWTManager): JsonResponse
    {
        $user = $this->getUser();
        $token = $JWTManager->create($user);
        if ($user) {
            //$userToken = $this->get('security.tok');
            return $this->json([
                "msg" => "success",
                "id" => $user->getId(),
                "email" => $user->getUserIdentifier(),
                "roles" => $user->getRoles(),
                "token" => $token
            ], Response::HTTP_ACCEPTED);
        }
        return $this->json([
            "msg" => "error",
            "content" => "Utilisateur non trouvé"
        ], Response::HTTP_UNAUTHORIZED);
    }
}

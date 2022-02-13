<?php

namespace App\Controller;


use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ProductController extends AbstractController
{
    public function __invoke(Request $request)
    {

        $product = $request->attributes->get('data');
        if (!($product instanceof Product)) {
            throw new \RuntimeException("Produit attendu");
        }
        $product->setProd1($request->files->get('file'));
        $product->setUpdatedAt(new \DateTime());
        return $product;
    }
}

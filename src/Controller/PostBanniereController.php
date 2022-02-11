<?php

namespace App\Controller;

use App\Entity\Marchand;
use Symfony\Component\HttpFoundation\Request;

class PostBanniereController
{
    public function __invoke(Request $request)
    {
        $marchand = $request->attributes->get('data');
        if (!($marchand instanceof Marchand)) {
            throw new \RuntimeException('marchand introuvable');
        }
        $file = $request->files->get('file');
        dd($file);
    }
}

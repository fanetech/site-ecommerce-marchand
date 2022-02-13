<?php

namespace App\Controller;

use App\Entity\Marchand;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class Des2Controller extends AbstractController
{
	public function __invoke(Request $request)
	{
		$marchand = $request->attributes->get('data');
		if (!($marchand instanceof Marchand)) {
			throw new \RuntimeException("marchand attendu");
		}
		$marchand->setFile4($request->files->get('file'));
		$marchand->setUpdatedAt(new \DateTime());
		return $marchand;
	}
}

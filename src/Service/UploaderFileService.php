<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderFileService
{
	public function uploader(UploadedFile $file, string $dossier, string $id = null)
	{
		if (!$id) {

			$fileName = time() . ".jpg";
		} else {

			$fileName = $id . "." . time() . ".jpg";
		}
		$file->move($dossier, $fileName);
		return $fileName;
	}
}

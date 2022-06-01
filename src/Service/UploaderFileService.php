<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploaderFileService
{
	public function uploader(UploadedFile $file, string $dossier, string $id = null)
	{
		$fileName = $id . "." . time() . ".jpg";
		$file->move($dossier, $fileName);
		return $fileName;
	}
}

<?php

namespace App\Entity;

use App\Repository\MarchandRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MarchandRepository::class)]
class Marchand
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $firstName;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $phone;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $createdAt;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $storeName;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $storeDescription;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $logo;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $banniere;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $legalPage;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $sellPage;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $useTerme;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $faq;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $copyright;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getStoreName(): ?string
    {
        return $this->storeName;
    }

    public function setStoreName(?string $storeName): self
    {
        $this->storeName = $storeName;

        return $this;
    }

    public function getStoreDescription(): ?string
    {
        return $this->storeDescription;
    }

    public function setStoreDescription(?string $storeDescription): self
    {
        $this->storeDescription = $storeDescription;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getBanniere(): ?string
    {
        return $this->banniere;
    }

    public function setBanniere(?string $banniere): self
    {
        $this->banniere = $banniere;

        return $this;
    }

    public function getLegalPage(): ?string
    {
        return $this->legalPage;
    }

    public function setLegalPage(?string $legalPage): self
    {
        $this->legalPage = $legalPage;

        return $this;
    }

    public function getSellPage(): ?string
    {
        return $this->sellPage;
    }

    public function setSellPage(?string $sellPage): self
    {
        $this->sellPage = $sellPage;

        return $this;
    }

    public function getUseTerme(): ?string
    {
        return $this->useTerme;
    }

    public function setUseTerme(?string $useTerme): self
    {
        $this->useTerme = $useTerme;

        return $this;
    }

    public function getFaq(): ?string
    {
        return $this->faq;
    }

    public function setFaq(?string $faq): self
    {
        $this->faq = $faq;

        return $this;
    }

    public function getCopyright(): ?string
    {
        return $this->copyright;
    }

    public function setCopyright(?string $copyright): self
    {
        $this->copyright = $copyright;

        return $this;
    }
}

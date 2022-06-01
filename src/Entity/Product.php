<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $category;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $title;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $initialPrice;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $sellPrice;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $reducedPrice;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $stock;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $picture;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $supplyTime;

    #[ORM\Column(type: 'datetime')]
    private $createdAt;

    #[ORM\Column(type: 'datetime')]
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 255)]
    private $marchandId;

    public function __construct()
    {
        //irriger createdAt and UpdatedAt
        $this->setUpdatedAt(new DateTime());
        $this->setCreatedAt(new DateTime);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getInitialPrice(): ?int
    {
        return $this->initialPrice;
    }

    public function setInitialPrice(?int $initialPrice): self
    {
        $this->initialPrice = $initialPrice;

        return $this;
    }

    public function getSellPrice(): ?int
    {
        return $this->sellPrice;
    }

    public function setSellPrice(?int $sellPrice): self
    {
        $this->sellPrice = $sellPrice;

        return $this;
    }

    public function getReducedPrice(): ?int
    {
        return $this->reducedPrice;
    }

    public function setReducedPrice(?int $reducedPrice): self
    {
        $this->reducedPrice = $reducedPrice;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getSupplyTime(): ?\DateTimeInterface
    {
        return $this->supplyTime;
    }

    public function setSupplyTime(?\DateTimeInterface $supplyTime): self
    {
        $this->supplyTime = $supplyTime;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getMarchandId(): ?string
    {
        return $this->marchandId;
    }

    public function setMarchandId(string $marchandId): self
    {
        $this->marchandId = $marchandId;

        return $this;
    }
}

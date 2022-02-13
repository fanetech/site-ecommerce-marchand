<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\Product2Controller;
use App\Controller\Product3Controller;
use App\Controller\ProductController;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
/**
 * @Vich\Uploadable()
 */
#[ApiResource(
    denormalizationContext: ['groups' => ['white:product']],
    normalizationContext: ['groups' => ['read:product']],
    itemOperations: [
        'get',
        //'post',
        'put',
        'delete',
        'patch',
        'product1' => [
            'method' => 'POST',
            'path' => '/product/{id}/prod1',
            'deserialize' => false,
            "controller" => ProductController::class

        ],

        'product2' => [
            'method' => 'POST',
            'path' => '/product/{id}/prod2',
            'deserialize' => false,
            "controller" => Product2Controller::class

        ],

        'product3' => [
            'method' => 'POST',
            'path' => '/product/{id}/prod3',
            'deserialize' => false,
            "controller" => Product3Controller::class

        ],
    ]
)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:product'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255,  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $categorie;

    #[ORM\Column(type: 'string', length: 255,  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $title;

    #[ORM\Column(type: 'text',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $description1;

    #[ORM\Column(type: 'text',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $description2;

    #[ORM\Column(type: 'text',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $description3;

    #[ORM\Column(type: 'integer',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $price;

    #[ORM\Column(type: 'integer',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $sellPrice;

    #[ORM\Column(type: 'integer',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $reducedPrice;

    #[ORM\Column(type: 'integer',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $stock;

    #[ORM\Column(type: 'string', length: 255,  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $picture1;

    #[ORM\Column(type: 'string', length: 255,  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $picture2;

    #[ORM\Column(type: 'string', length: 255,  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $picture3;

    #[ORM\Column(type: 'datetime',  nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $shippingDate;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $createdAt;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['read:product', 'white:product'])]
    private $marchandId;




    /**
     * @var File|null
     * @Vich\UploadableField(mapping="product",fileNameProperty="picture1")
     */
    private $prod1;


    /**
     * @var File|null
     * @Vich\UploadableField(mapping="product",fileNameProperty="picture2")
     */
    private $prod2;

    /**
     * @var File|null
     * @Vich\UploadableField(mapping="product",fileNameProperty="picture3")
     */
    private $prod3;





    //#[ORM\ManyToOne(targetEntity: Marchand::class, inversedBy: 'product')]

    //#[ORM\OneToMany(mappedBy: 'product', targetEntity: Avis::class, orphanRemoval: true)]
    //#[Groups('read:post:product', 'white:post:product')]
    //private $avis;

    //#[ORM\OneToMany(mappedBy: 'product', targetEntity: Command::class)]
    //#[Groups('read:post:product', 'white:post:product')]
    //private $command;

    public function __construct()
    {

        $this->setUpdatedAt(new DateTime());
        $this->setCreatedAt(new DateTime());
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getProd1(): ?File
    {
        return $this->prod1;
    }

    public function setProd1(?File $prod1): self
    {
        $this->prod1 = $prod1;

        return $this;
    }


    public function getProd2(): ?File
    {
        return $this->prod2;
    }

    public function setProd2(?File $prod2): self
    {
        $this->prod2 = $prod2;

        return $this;
    }


    public function getProd3(): ?File
    {
        return $this->prod3;
    }

    public function setProd3(?File $prod3): self
    {
        $this->prod3 = $prod3;

        return $this;
    }




    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription1(): ?string
    {
        return $this->description1;
    }

    public function setDescription1(string $description1): self
    {
        $this->description1 = $description1;

        return $this;
    }

    public function getDescription2(): ?string
    {
        return $this->description2;
    }

    public function setDescription2(string $description2): self
    {
        $this->description2 = $description2;

        return $this;
    }

    public function getDescription3(): ?string
    {
        return $this->description3;
    }

    public function setDescription3(string $description3): self
    {
        $this->description3 = $description3;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(?int $price): self
    {
        $this->price = $price;

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

    public function getPicture1(): ?string
    {
        return $this->picture1;
    }

    public function setPicture1(string $picture1): self
    {
        $this->picture1 = $picture1;

        return $this;
    }

    public function getPicture2(): ?string
    {
        return $this->picture2;
    }

    public function setPicture2(string $picture2): self
    {
        $this->picture2 = $picture2;

        return $this;
    }

    public function getPicture3(): ?string
    {
        return $this->picture3;
    }

    public function setPicture3(string $picture3): self
    {
        $this->picture3 = $picture3;

        return $this;
    }

    public function getShippingDate(): ?\DateTimeInterface
    {
        return $this->shippingDate;
    }

    public function setShippingDate(?\DateTimeInterface $shippingDate): self
    {
        $this->shippingDate = $shippingDate;

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



    ///**
    // * @return Collection|Avis[]
    // */
    //public function getAvis(): Collection
    //{
    //    return $this->avis;
    //}

    //public function addAvi(Avis $avi): self
    //{
    //    if (!$this->avis->contains($avi)) {
    //        $this->avis[] = $avi;
    //        $avi->setProduct($this);
    //    }

    //    return $this;
    //}

    //public function removeAvi(Avis $avi): self
    //{
    //    if ($this->avis->removeElement($avi)) {
    //        // set the owning side to null (unless already changed)
    //        if ($avi->getProduct() === $this) {
    //            $avi->setProduct(null);
    //        }
    //    }

    //    return $this;
    //}

    //**
    // * @return Collection|Command[]
    // */
    //public function getCommand(): Collection
    //{
    //    return $this->command;
    //}

    //public function addCommand(Command $command): self
    //{
    //    if (!$this->command->contains($command)) {
    //        $this->command[] = $command;
    //        $command->setProduct($this);
    //    }

    //    return $this;
    //}

    //public function removeCommand(Command $command): self
    //{
    //    if ($this->command->removeElement($command)) {
    //        // set the owning side to null (unless already changed)
    //        if ($command->getProduct() === $this) {
    //            $command->setProduct(null);
    //        }
    //    }

    //    return $this;
    //}

    public function getMarchandId(): ?string
    {
        return $this->marchandId;
    }

    public function setMarchandId(?string $marchandId): self
    {
        $this->marchandId = $marchandId;

        return $this;
    }
}

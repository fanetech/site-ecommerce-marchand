<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CommandRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommandRepository::class)]
#[ApiResource(
    iri: "Command"
)]
class Command
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $date;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    private $firstName;

    #[ORM\Column(type: 'string', length: 255)]
    private $email;

    #[ORM\Column(type: 'integer')]
    private $telephone;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $adress;

    //#[ORM\ManyToOne(targetEntity: Marchand::class, inversedBy: 'Command')]
    //#[ORM\JoinColumn(nullable: false)]
    //private $marchand;

    //#[ORM\ManyToOne(targetEntity: Product::class, inversedBy: 'command')]
    //#[ORM\JoinColumn(nullable: false)]
    //private $product;

    //#[ORM\ManyToOne(targetEntity: Client::class, inversedBy: 'command')]
    //#[ORM\JoinColumn(nullable: false)]
    //private $client;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
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

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTelephone(): ?int
    {
        return $this->telephone;
    }

    public function setTelephone(int $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(?string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    //public function getMarchand(): ?Marchand
    //{
    //    return $this->marchand;
    //}

    //public function setMarchand(?Marchand $marchand): self
    //{
    //    $this->marchand = $marchand;

    //    return $this;
    //}

    //public function getProduct(): ?Product
    //{
    //    return $this->product;
    //}

    //public function setProduct(?Product $product): self
    //{
    //    $this->product = $product;

    //    return $this;
    //}

    //public function getClient(): ?Client
    //{
    //    return $this->client;
    //}

    //public function setClient(?Client $client): self
    //{
    //    $this->client = $client;

    //    return $this;
    //}
}

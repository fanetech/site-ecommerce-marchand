<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClientRepository::class)]
#[ApiResource(
    iri: "Client"
)]
class Client
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
    private $email;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $password;

    //#[ORM\ManyToOne(targetEntity: Marchand::class, inversedBy: 'client')]
    #[ORM\JoinColumn(nullable: false)]
    private $marchand;

    //#[ORM\OneToMany(mappedBy: 'client', targetEntity: Avis::class)]
    //private $avis;

    //#[ORM\OneToMany(mappedBy: 'client', targetEntity: Command::class, orphanRemoval: true)]
    //private $command;

    public function __construct()
    {
        $this->avis = new ArrayCollection();
        $this->command = new ArrayCollection();
    }

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getMarchand(): ?Marchand
    {
        return $this->marchand;
    }

    public function setMarchand(?Marchand $marchand): self
    {
        $this->marchand = $marchand;

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
    //        $avi->setClient($this);
    //    }

    //    return $this;
    //}

    //public function removeAvi(Avis $avi): self
    //{
    //    if ($this->avis->removeElement($avi)) {
    //        // set the owning side to null (unless already changed)
    //        if ($avi->getClient() === $this) {
    //            $avi->setClient(null);
    //        }
    //    }

    //    return $this;
    //}

    ///**
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
    //        $command->setClient($this);
    //    }

    //    return $this;
    //}

    //public function removeCommand(Command $command): self
    //{
    //    if ($this->command->removeElement($command)) {
    //        // set the owning side to null (unless already changed)
    //        if ($command->getClient() === $this) {
    //            $command->setClient(null);
    //        }
    //    }

    //    return $this;
    //}
}

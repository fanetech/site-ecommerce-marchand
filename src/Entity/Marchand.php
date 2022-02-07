<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MarchandRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MarchandRepository::class)]
#[ApiResource]
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
    private $storeName;

    #[ORM\Column(type: 'string', length: 70, nullable: true)]
    private $email;

    #[ORM\Column(type: 'integer')]
    private $phone;

    #[ORM\Column(type: 'string', length: 255)]
    private $compte;

    #[ORM\Column(type: 'string', length: 255)]
    private $logo;

    #[ORM\Column(type: 'string', length: 255)]
    private $favicon;

    #[ORM\Column(type: 'text')]
    private $description;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $baniere;

    #[ORM\Column(type: 'text', nullable: true)]
    private $legalPage;

    #[ORM\Column(type: 'text', nullable: true)]
    private $sellPage;

    #[ORM\Column(type: 'text', nullable: true)]
    private $useTerms;

    #[ORM\Column(type: 'text', nullable: true)]
    private $faq;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $createdAt;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $password;

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

    public function getStoreName(): ?string
    {
        return $this->storeName;
    }

    public function setStoreName(?string $storeName): self
    {
        $this->storeName = $storeName;

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

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(int $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getCompte(): ?string
    {
        return $this->compte;
    }

    public function setCompte(string $compte): self
    {
        $this->compte = $compte;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getFavicon(): ?string
    {
        return $this->favicon;
    }

    public function setFavicon(string $favicon): self
    {
        $this->favicon = $favicon;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getBaniere(): ?string
    {
        return $this->baniere;
    }

    public function setBaniere(?string $baniere): self
    {
        $this->baniere = $baniere;

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

    public function getUseTerms(): ?string
    {
        return $this->useTerms;
    }

    public function setUseTerms(?string $useTerms): self
    {
        $this->useTerms = $useTerms;

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

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }
}

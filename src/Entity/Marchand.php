<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MarchandRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MarchandRepository::class)]
#[ApiResource(
    denormalizationContext: ['groups' => ['white:post']]
)]
class Marchand
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post'])]
    private $firstName;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post'])]
    private $storeName;

    #[ORM\Column(type: 'string', length: 70, nullable: true)]
    #[Groups(['white:post'])]
    private $email;

    #[ORM\Column(type: 'integer')]
    #[Groups(['white:post'])]
    private $phone;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post'])]
    private $compte;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['white:post'])]
    private $logo;

    #[ORM\Column(type: 'string')]
    #[Groups(['white:post'])]
    private $favicon;

    #[ORM\Column(type: 'text')]
    #[Groups(['white:post'])]
    private $description;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['white:post'])]
    private $baniere;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post'])]
    private $legalPage;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post'])]
    private $sellPage;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post'])]
    private $useTerms;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post'])]
    private $faq;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['white:post'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['white:post'])]
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post'])]
    private $password;

    #[ORM\OneToMany(mappedBy: 'marchand', targetEntity: Product::class, orphanRemoval: true)]

    private $product;

    #[ORM\OneToMany(mappedBy: 'marchand', targetEntity: Command::class, orphanRemoval: true)]

    private $Command;

    #[ORM\OneToMany(mappedBy: 'marchand', targetEntity: Client::class, orphanRemoval: true)]
    private $client;

    public function __construct()
    {
        $this->product = new ArrayCollection();
        $this->Command = new ArrayCollection();
        $this->client = new ArrayCollection();
        $this->setUpdatedAt(new DateTime);
        $this->setCreatedAt(new DateTime);
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

    /**
     * @return Collection|Product[]
     */
    public function getProduct(): Collection
    {
        return $this->product;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->product->contains($product)) {
            $this->product[] = $product;
            $product->setMarchand($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->product->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getMarchand() === $this) {
                $product->setMarchand(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Command[]
     */
    public function getCommand(): Collection
    {
        return $this->Command;
    }

    public function addCommand(Command $command): self
    {
        if (!$this->Command->contains($command)) {
            $this->Command[] = $command;
            $command->setMarchand($this);
        }

        return $this;
    }

    public function removeCommand(Command $command): self
    {
        if ($this->Command->removeElement($command)) {
            // set the owning side to null (unless already changed)
            if ($command->getMarchand() === $this) {
                $command->setMarchand(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Client[]
     */
    public function getClient(): Collection
    {
        return $this->client;
    }

    public function addClient(Client $client): self
    {
        if (!$this->client->contains($client)) {
            $this->client[] = $client;
            $client->setMarchand($this);
        }

        return $this;
    }

    public function removeClient(Client $client): self
    {
        if ($this->client->removeElement($client)) {
            // set the owning side to null (unless already changed)
            if ($client->getMarchand() === $this) {
                $client->setMarchand(null);
            }
        }

        return $this;
    }
}

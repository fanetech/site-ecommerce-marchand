<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\BanniereController;
use App\Repository\MarchandRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\Des1Controller;
use App\Controller\Des2Controller;
use App\Controller\Des3Controller;
use App\Controller\LogController;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Annotation\ApiFilter;

#[ORM\Entity(repositoryClass: MarchandRepository::class)]
/**
 * @Vich\Uploadable()
 */
#[ApiResource(
    denormalizationContext: ['groups' => ['white:post']],
    normalizationContext: ['groups' => ['read:post']],
    itemOperations: [
        'get',
        //'post',
        'put',
        'delete',
        'patch',
        'image' => [
            'method' => 'POST',
            'path' => '/marchand/{id}/banniere',
            'deserialize' => false,
            "controller" => BanniereController::class

        ],
        'logo' => [
            'method' => 'POST',
            'path' => '/marchand/{id}/logo',
            'deserialize' => false,
            "controller" => LogController::class

        ],

        'image1' => [
            'method' => 'POST',
            'path' => '/marchand/{id}/img1',
            'deserialize' => false,
            "controller" => Des1Controller::class

        ],
        'image2' => [
            'method' => 'POST',
            'path' => '/marchand/{id}/img2',
            'deserialize' => false,
            "controller" => Des2Controller::class

        ],
        'image3' => [
            'method' => 'POST',
            'path' => '/marchand/{id}/img3',
            'deserialize' => false,
            "controller" => Des3Controller::class

        ]


    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['password' => 'exact', 'email' => 'exact'])]



class Marchand
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:post'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $firstName;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $storeName;

    #[ORM\Column(type: 'string', length: 70, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $email;

    #[ORM\Column(type: 'integer')]
    #[Groups(['white:post', 'read:post'])]
    private $phone;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $compte;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['white:post', 'read:post'])]
    private $logo;

    #[ORM\Column(type: 'string')]
    #[Groups(['white:post', 'read:post'])]
    private $favicon;

    #[ORM\Column(type: 'text')]
    #[Groups(['white:post', 'read:post'])]
    private $description;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['white:post', 'read:post'])]
    private $baniere;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $legalPage;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $sellPage;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $useTerms;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
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

    //#[ORM\OneToMany(mappedBy: 'marchand', targetEntity: Product::class, orphanRemoval: true)]

    //private $product;

    //#[ORM\OneToMany(mappedBy: 'marchand', targetEntity: Command::class, orphanRemoval: true)]

    //private $Command;

    //#[ORM\OneToMany(mappedBy: 'marchand', targetEntity: Client::class, orphanRemoval: true)]
    //private $client;

    /**
     * @var File|null
     * @Vich\UploadableField(mapping="picture",fileNameProperty="baniere")
     */
    private $file;


    /**
     * @var File|null
     * @Vich\UploadableField(mapping="picture",fileNameProperty="logo")
     */
    private $file2;


    /**
     * @var File|null
     * @Vich\UploadableField(mapping="picture",fileNameProperty="image1")
     */
    private $file3;


    /**
     * @var File|null
     * @Vich\UploadableField(mapping="picture",fileNameProperty="image2")
     */
    private $file4;


    /**
     * @var File|null
     * @Vich\UploadableField(mapping="picture",fileNameProperty="image3")
     */
    private $file5;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $description1;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $description2;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $description3;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $title1;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $title2;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $title3;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $image1;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $image2;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['white:post', 'read:post'])]
    private $image3;




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

    ///**
    // * @return Collection|Product[]
    // */
    //public function getProduct(): Collection
    //{
    //    return $this->product;
    //}

    //public function addProduct(Product $product): self
    //{
    //    if (!$this->product->contains($product)) {
    //        $this->product[] = $product;
    //        $product->setMarchand($this);
    //    }

    //    return $this;
    //}

    //public function removeProduct(Product $product): self
    //{
    //    if ($this->product->removeElement($product)) {
    //        // set the owning side to null (unless already changed)
    //        if ($product->getMarchand() === $this) {
    //            $product->setMarchand(null);
    //        }
    //    }

    //    return $this;
    //}

    ///**
    // * @return Collection|Command[]
    // */
    //public function getCommand(): Collection
    //{
    //    return $this->Command;
    //}

    //public function addCommand(Command $command): self
    //{
    //    if (!$this->Command->contains($command)) {
    //        $this->Command[] = $command;
    //        $command->setMarchand($this);
    //    }

    //    return $this;
    //}

    //public function removeCommand(Command $command): self
    //{
    //    if ($this->Command->removeElement($command)) {
    //        // set the owning side to null (unless already changed)
    //        if ($command->getMarchand() === $this) {
    //            $command->setMarchand(null);
    //        }
    //    }

    //    return $this;
    //}

    ///**
    // * @return Collection|Client[]
    // */
    //public function getClient(): Collection
    //{
    //    return $this->client;
    //}

    //public function addClient(Client $client): self
    //{
    //    if (!$this->client->contains($client)) {
    //        $this->client[] = $client;
    //        $client->setMarchand($this);
    //    }

    //    return $this;
    //}

    //public function removeClient(Client $client): self
    //{
    //    if ($this->client->removeElement($client)) {
    //        // set the owning side to null (unless already changed)
    //        if ($client->getMarchand() === $this) {
    //            $client->setMarchand(null);
    //        }
    //    }

    //    return $this;
    //}

    public function getFile(): ?File
    {
        return $this->file;
    }

    public function setFile(?File $file): self
    {
        $this->file = $file;

        return $this;
    }


    public function getFile2(): ?File
    {
        return $this->file2;
    }

    public function setFile2(?File $file2): self
    {
        $this->file2 = $file2;

        return $this;
    }


    public function getFile3(): ?File
    {
        return $this->file3;
    }

    public function setFile3(?File $file3): self
    {
        $this->file3 = $file3;

        return $this;
    }


    public function getFile5(): ?File
    {
        return $this->file5;
    }

    public function setFile5(?File $file5): self
    {
        $this->file5 = $file5;

        return $this;
    }


    public function getFile4(): ?File
    {
        return $this->file4;
    }

    public function setFile4(?File $file4): self
    {
        $this->file4 = $file4;

        return $this;
    }

    public function getDescription1(): ?string
    {
        return $this->description1;
    }

    public function setDescription1(?string $description1): self
    {
        $this->description1 = $description1;

        return $this;
    }

    public function getDescription2(): ?string
    {
        return $this->description2;
    }

    public function setDescription2(?string $description2): self
    {
        $this->description2 = $description2;

        return $this;
    }

    public function getDescription3(): ?string
    {
        return $this->description3;
    }

    public function setDescription3(?string $description3): self
    {
        $this->description3 = $description3;

        return $this;
    }

    public function getTitle1(): ?string
    {
        return $this->title1;
    }

    public function setTitle1(?string $title1): self
    {
        $this->title1 = $title1;

        return $this;
    }

    public function getTitle2(): ?string
    {
        return $this->title2;
    }

    public function setTitle2(?string $title2): self
    {
        $this->title2 = $title2;

        return $this;
    }

    public function getTitle3(): ?string
    {
        return $this->title3;
    }

    public function setTitle3(?string $title3): self
    {
        $this->title3 = $title3;

        return $this;
    }

    public function getImage1(): ?string
    {
        return $this->image1;
    }

    public function setImage1(?string $image1): self
    {
        $this->image1 = $image1;

        return $this;
    }

    public function getImage2(): ?string
    {
        return $this->image2;
    }

    public function setImage2(?string $image2): self
    {
        $this->image2 = $image2;

        return $this;
    }

    public function getImage3(): ?string
    {
        return $this->image3;
    }

    public function setImage3(?string $image3): self
    {
        $this->image3 = $image3;

        return $this;
    }
}

<?php

namespace App\DataFixtures;

use App\Entity\Auteur;
use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 20; $i++) {
            $auteur = new Auteur();
            $auteur->setName($faker->name);
            $auteur->setFirstName($faker->firstName);
            $manager->persist($auteur);
        }

        $manager->flush();
    }
}

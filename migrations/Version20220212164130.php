<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220212164130 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE marchand ADD title1 VARCHAR(255) DEFAULT NULL, ADD title2 VARCHAR(255) DEFAULT NULL, ADD title3 VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE admin CHANGE user_name user_name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE password password VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE avis CHANGE comment comment LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE client CHANGE name name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE first_name first_name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE password password VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE command CHANGE name name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE first_name first_name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE adress adress VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE marchand DROP title1, DROP title2, DROP title3, CHANGE name name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE first_name first_name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE store_name store_name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(70) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE compte compte VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE logo logo VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE favicon favicon VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE baniere baniere VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE legal_page legal_page LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE sell_page sell_page LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE use_terms use_terms LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE faq faq LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE password password VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description1 description1 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description2 description2 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description3 description3 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE product CHANGE categorie categorie VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE title title VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description1 description1 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description2 description2 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description3 description3 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE picture1 picture1 VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE picture2 picture2 VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE picture3 picture3 VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE marchand_id marchand_id VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}

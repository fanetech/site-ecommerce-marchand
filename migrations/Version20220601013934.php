<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220601013934 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD2676EF46');
        $this->addSql('DROP INDEX IDX_D34A04AD2676EF46 ON product');
        $this->addSql('ALTER TABLE product DROP id_marchand_id, DROP marchand_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product ADD id_marchand_id INT NOT NULL, ADD marchand_id VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD2676EF46 FOREIGN KEY (id_marchand_id) REFERENCES marchand (id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD2676EF46 ON product (id_marchand_id)');
    }
}

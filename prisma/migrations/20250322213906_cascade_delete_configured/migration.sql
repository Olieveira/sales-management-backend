-- DropForeignKey
ALTER TABLE `itemvenda` DROP FOREIGN KEY `ItemVenda_idVenda_fkey`;

-- AlterTable
ALTER TABLE `estoque` ALTER COLUMN `criado_em` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `ItemVenda` ADD CONSTRAINT `ItemVenda_idVenda_fkey` FOREIGN KEY (`idVenda`) REFERENCES `Venda`(`id_venda`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `estoque` ALTER COLUMN `criado_em` DROP DEFAULT;

-- AlterTable
ALTER TABLE `produto` ADD COLUMN `ativo` BOOLEAN NULL DEFAULT true,
    ADD COLUMN `inativo_em` TIMESTAMP(6) NULL;

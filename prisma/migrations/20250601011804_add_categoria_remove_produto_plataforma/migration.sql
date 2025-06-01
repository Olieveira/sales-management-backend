/*
  Warnings:

  - You are about to alter the column `nome` on the `estoque` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(35)`.
  - You are about to alter the column `nome` on the `etapa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.
  - You are about to drop the column `unidade` on the `etapamaterial` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `fornecedor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.
  - You are about to alter the column `nome` on the `plataformavenda` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.
  - You are about to drop the column `idProduto` on the `processo` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `processo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.
  - You are about to alter the column `status` on the `statusprocesso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(45)`.
  - You are about to alter the column `nomeComprador` on the `venda` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.
  - You are about to drop the `produtoplataforma` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idStatus` to the `Etapa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idProcesso` to the `EtapaMaterial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criadoEm` to the `Processo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCategoria` to the `Processo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCategoria` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `processo` DROP FOREIGN KEY `Processo_idProduto_fkey`;

-- DropForeignKey
ALTER TABLE `produtoplataforma` DROP FOREIGN KEY `ProdutoPlataforma_idPlataforma_fkey`;

-- DropForeignKey
ALTER TABLE `produtoplataforma` DROP FOREIGN KEY `ProdutoPlataforma_idProduto_fkey`;

-- DropIndex
DROP INDEX `Processo_idProduto_fkey` ON `processo`;

-- AlterTable
ALTER TABLE `estoque` MODIFY `nome` VARCHAR(35) NOT NULL,
    ALTER COLUMN `criado_em` DROP DEFAULT;

-- AlterTable
ALTER TABLE `etapa` ADD COLUMN `idStatus` INTEGER NOT NULL,
    MODIFY `nome` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `etapamaterial` DROP COLUMN `unidade`,
    ADD COLUMN `idProcesso` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `fornecedor` MODIFY `nome` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `itemvenda` MODIFY `unidade` VARCHAR(35) NULL;

-- AlterTable
ALTER TABLE `plataformavenda` MODIFY `nome` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `processo` DROP COLUMN `idProduto`,
    ADD COLUMN `criadoEm` DATETIME(3) NOT NULL,
    ADD COLUMN `idCategoria` INTEGER NOT NULL,
    MODIFY `nome` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `produto` ADD COLUMN `idCategoria` INTEGER NOT NULL,
    MODIFY `unidade` VARCHAR(35) NULL;

-- AlterTable
ALTER TABLE `statusprocesso` MODIFY `status` VARCHAR(45) NULL;

-- AlterTable
ALTER TABLE `venda` MODIFY `nomeComprador` VARCHAR(120) NOT NULL;

-- DropTable
DROP TABLE `produtoplataforma`;

-- CreateTable
CREATE TABLE `CategoriasProdutos` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusEtapa` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `CategoriasProdutos`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Processo` ADD CONSTRAINT `Processo_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `CategoriasProdutos`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etapa` ADD CONSTRAINT `Etapa_idStatus_fkey` FOREIGN KEY (`idStatus`) REFERENCES `StatusEtapa`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EtapaMaterial` ADD CONSTRAINT `EtapaMaterial_idProcesso_fkey` FOREIGN KEY (`idProcesso`) REFERENCES `Processo`(`id_processo`) ON DELETE RESTRICT ON UPDATE CASCADE;

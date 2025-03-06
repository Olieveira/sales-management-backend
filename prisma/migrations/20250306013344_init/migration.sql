-- CreateTable
CREATE TABLE `Produto` (
    `id_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(230) NULL,
    `unidade` VARCHAR(10) NULL,
    `estoqueUn` INTEGER NULL,
    `preco` DECIMAL(10, 2) NULL,
    `criado_em` TIMESTAMP(6) NULL,

    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusProcesso` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Processo` (
    `id_processo` INTEGER NOT NULL AUTO_INCREMENT,
    `idProduto` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `idStatus` INTEGER NOT NULL,

    PRIMARY KEY (`id_processo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fornecedor` (
    `id_fornecedor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `contato` VARCHAR(150) NULL,
    `link` VARCHAR(255) NULL,

    PRIMARY KEY (`id_fornecedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estoque` (
    `id_material` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `unidade` VARCHAR(10) NULL,
    `estoqueMin` INTEGER NULL,
    `idFornecedor` INTEGER NOT NULL,
    `criado_em` TIMESTAMP(6) NOT NULL,

    PRIMARY KEY (`id_material`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etapa` (
    `id_etapa` INTEGER NOT NULL AUTO_INCREMENT,
    `idProcesso` INTEGER NOT NULL,
    `sequencia` INTEGER NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,

    PRIMARY KEY (`id_etapa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EtapaMaterial` (
    `idEtapa` INTEGER NOT NULL,
    `idMaterial` INTEGER NOT NULL,
    `quantidade` INTEGER NULL,
    `unidade` VARCHAR(10) NULL,

    PRIMARY KEY (`idEtapa`, `idMaterial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlataformaVenda` (
    `id_plataforma` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `linkHome` VARCHAR(255) NULL,

    PRIMARY KEY (`id_plataforma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusVenda` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venda` (
    `id_venda` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeComprador` VARCHAR(191) NOT NULL,
    `idPlataforma` INTEGER NOT NULL,
    `idStatus` INTEGER NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `criado_em` TIMESTAMP(6) NULL,

    PRIMARY KEY (`id_venda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemVenda` (
    `idVenda` INTEGER NOT NULL,
    `idProduto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `unidade` VARCHAR(10) NULL,

    PRIMARY KEY (`idVenda`, `idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProdutoPlataforma` (
    `idProduto` INTEGER NOT NULL,
    `idPlataforma` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,

    PRIMARY KEY (`idProduto`, `idPlataforma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Processo` ADD CONSTRAINT `Processo_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produto`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Processo` ADD CONSTRAINT `Processo_idStatus_fkey` FOREIGN KEY (`idStatus`) REFERENCES `StatusProcesso`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estoque` ADD CONSTRAINT `Estoque_idFornecedor_fkey` FOREIGN KEY (`idFornecedor`) REFERENCES `Fornecedor`(`id_fornecedor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etapa` ADD CONSTRAINT `Etapa_idProcesso_fkey` FOREIGN KEY (`idProcesso`) REFERENCES `Processo`(`id_processo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EtapaMaterial` ADD CONSTRAINT `EtapaMaterial_idEtapa_fkey` FOREIGN KEY (`idEtapa`) REFERENCES `Etapa`(`id_etapa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EtapaMaterial` ADD CONSTRAINT `EtapaMaterial_idMaterial_fkey` FOREIGN KEY (`idMaterial`) REFERENCES `Estoque`(`id_material`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_idPlataforma_fkey` FOREIGN KEY (`idPlataforma`) REFERENCES `PlataformaVenda`(`id_plataforma`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_idStatus_fkey` FOREIGN KEY (`idStatus`) REFERENCES `StatusVenda`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemVenda` ADD CONSTRAINT `ItemVenda_idVenda_fkey` FOREIGN KEY (`idVenda`) REFERENCES `Venda`(`id_venda`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemVenda` ADD CONSTRAINT `ItemVenda_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produto`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutoPlataforma` ADD CONSTRAINT `ProdutoPlataforma_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `Produto`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProdutoPlataforma` ADD CONSTRAINT `ProdutoPlataforma_idPlataforma_fkey` FOREIGN KEY (`idPlataforma`) REFERENCES `PlataformaVenda`(`id_plataforma`) ON DELETE RESTRICT ON UPDATE CASCADE;

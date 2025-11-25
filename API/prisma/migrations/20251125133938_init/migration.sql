-- CreateTable
CREATE TABLE `Func_Ui` (
    `id` INTEGER NOT NULL,
    `pacienteId` INTEGER NOT NULL,
    `medicoId` INTEGER NOT NULL,
    `mensagem` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Func_Ui` ADD CONSTRAINT `Func_Ui_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Func_Ui` ADD CONSTRAINT `Func_Ui_medicoId_fkey` FOREIGN KEY (`medicoId`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

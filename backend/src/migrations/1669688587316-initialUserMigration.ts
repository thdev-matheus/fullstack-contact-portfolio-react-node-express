import { MigrationInterface, QueryRunner } from "typeorm";

export class initialUserMigration1669688587316 implements MigrationInterface {
    name = 'initialUserMigration1669688587316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying NOT NULL, "email1" character varying NOT NULL, "password" character varying NOT NULL, "email2" character varying, "phone1" character varying, "phone2" character varying, CONSTRAINT "UQ_a1a8d8d7d7b694ea88b3a9721e6" UNIQUE ("email1"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

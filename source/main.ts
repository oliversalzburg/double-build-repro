import { buildSchema } from "type-graphql";
import { ArchiveResolver } from "./ArchiveResolver";
import "reflect-metadata";

const main = async () => {
	await buildSchema({
		resolvers: [ArchiveResolver],
	});

	await new Promise(resolve => setTimeout(resolve, 5000));

	await buildSchema({
		resolvers: [ArchiveResolver],
	});
}

main();
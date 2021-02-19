import { Arg, Query, Resolver } from "type-graphql";
import { Archive } from "./Archive";

@Resolver(of => Archive)
export class ArchiveResolver {
	@Query(is => Archive)
	async sendArchive(@Arg("archive") archive: Archive): Promise<Archive> {
		return archive;
	}
}
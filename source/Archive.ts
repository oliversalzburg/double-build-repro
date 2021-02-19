import { Field, InputType, ObjectType } from "type-graphql";

@InputType("ArchiveInput")
@ObjectType()
export class Archive {
	@Field(is => Date, {
		description: "When this support archive was created.",
	})
	created = new Date();
}

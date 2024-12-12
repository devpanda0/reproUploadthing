import {createUploadthing, type FileRouter} from "uploadthing/next";
import {UploadThingError} from "uploadthing/server";
import {cookies} from "next/headers";

const f = createUploadthing();

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 1 } })
        .middleware(async () => {
            const session = JSON.parse((await cookies()).get("viewToken")?.value || "null");
            // eslint-disable-next-line @typescript-eslint/only-throw-error
            if (!session) throw new UploadThingError("Unauthorized");

            return { accountId: session.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log("Upload complete for userId");

            console.log("file url", file.url);

            return { test: "test" }
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

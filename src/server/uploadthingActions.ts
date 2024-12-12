// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use server";

const utApi = new UTApi({
    token: env.UPLOADTHING_API_KEY,
})

export async function deleteFile(id: string) {
    console.log("Deleting: ", id);

    try {
        const res = await utApi.deleteFiles({fileKeys: [id]});
        return res.data;
    } catch (error: unknown) {
        console.error("error: ", error.response.data.data);
        return { success: false, error: error.response.data.data };
    }
}
const config = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_I),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPRWRITE_BUCKET_ID),
    
}

export default config;
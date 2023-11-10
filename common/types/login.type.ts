export type TokenUser = {
    error: boolean,
    message: string,
    data: {
        is_verified: boolean,
        user: {
            id: number,
            uid: string | null,
            email: string,
            photo: string | null,
            phone: string | null,
            website: string | null,
            about: string | null,
            pricing: string | null,
            instagram_username: string | null,
            role: string | null,
            status: string | null,
            active: boolean,
            designation: {
                id: number,
                name: string
            },
            reviews: any
        },
        token: string
    }
}

type reviews = {
    id: number
}
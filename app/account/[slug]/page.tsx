import type { IResponseUser } from '~&/src/shared/types/User.interface';
import { default as Page } from '~&/src/screens/account/owner';
import { API_URL, APP_URL } from '~&/src/shared/lib/enviroments';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    const users = (await fetch(`${API_URL}/user`, {
        next: { revalidate: 10 * 60 * 60 },
        method: 'GET'
    }).then(res => res.json())) as IResponseUser[];

    return users.map(user => ({
        slug: user.slug
    }));
}

export async function generateMetadata({
    params
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const user = (await fetch(`${API_URL}/user/${params.slug}`, {
        next: { revalidate: 10 * 60 * 60 },
        method: 'GET'
    }).then(res => res.json())) as IResponseUser;

    return {
        title: `Профиль юзера ${user.name}`,
        description: `${user?.description || ''}`,
        metadataBase: new URL(APP_URL || ''),
        twitter: {
            card: 'summary_large_image',
            title: user.name,
            description: user.description,
            images: {
                alt: `Аватар юзера - ${user.slug}`,
                url: user?.image?.url || '',
                height: 50,
                width: 50
            }
        }
    };
}

export default async function OwnerPage({
    params
}: {
    params: { slug: string };
}) {
    return <Page slug={params.slug} />;
}

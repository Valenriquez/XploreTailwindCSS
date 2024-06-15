// Use "use client" directive (Next.js 13+)
"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { cn } from "../../lib/utils/cn";

// If the useUser hook or Auth0 package does not provide types, you will need to define them or install @types/nextjs-auth0 if available.
// interface User {
//   name: string;
//   picture: string;
//   email: string;
// }
type CardProps = React.ComponentProps<typeof Card>;

export default function Page({ className, ...props }: CardProps) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <Card className="w-2/4 pt-10">
        <CardContent className="items-center gap-8">
          <img
            alt="Profile Picture"
            className="rounded-full"
            height={96}
            src={user.picture}
            style={{
              aspectRatio: "96/96",
              objectFit: "cover",
            }}
            width={96}
          />
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
            <p className="text-gray-500 dark:text-gray-400">user.company</p>
            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button variant="outline">Edit Profile</Button>
            {/* logout button */}
            <Link href="/api/auth/logout">
              <Button variant="outline" className="text-red-500">
                Logout
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  );
}

 
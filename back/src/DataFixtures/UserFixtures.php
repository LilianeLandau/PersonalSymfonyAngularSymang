<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        // Liste des utilisateurs à créer
        $users = [
            ['email' => 'user1@example.com', 'password' => 'user', 'roles' => ['ROLE_USER']],
            ['email' => 'user2@example.com', 'password' => 'user', 'roles' => ['ROLE_USER']],
            ['email' => 'admin@example.com', 'password' => 'admin', 'roles' => ['ROLE_ADMIN']],
            ['email' => 'user3@example.com', 'password' => 'user', 'roles' => ['ROLE_USER']],
        ];

        foreach ($users as $userData) {
            $user = new User();
            $user->setEmail($userData['email']);
            // Hachage du mot de passe avant enregistrement
            $hashedPassword = $this->passwordHasher->hashPassword($user, $userData['password']);
            $user->setPassword($hashedPassword);
            $user->setRoles($userData['roles']);

            $manager->persist($user);
        }

        $manager->flush();
    }
}

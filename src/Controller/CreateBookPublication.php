<?php
// api/src/Controller/CreateBookPublication.php
namespace App\Controller;

use App\Entity\Tag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class CreateBookPublication extends AbstractController
{
    public function __construct(
        // private BookPublishingHandler $bookPublishingHandler
    ) {}

    public function __invoke(Tag $book): Tag
    {
        // $this->bookPublishingHandler->handle($book);

        return $book;
    }
}
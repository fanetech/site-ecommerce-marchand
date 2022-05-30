<?php

namespace App\Form;

use App\Entity\Marchand;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MarchandType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name')
            ->add('firstName')
            ->add('phone')
            ->add('storeName')
            ->add('storeDescription')
            ->add('legalPage')
            ->add('sellPage')
            ->add('useTerme')
            ->add('faq');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Marchand::class,
        ]);
    }
}

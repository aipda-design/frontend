const MentionLegal = () => {

    const title = "Mention";
    const subTitle = "Mention legal";
    const otherTitle = "Conditions Générales d'Utilisation (CGU)";
    return (
        <>
            <div className={"p-4  w-inherit 2xl:pl-28 2xl:pr-24 text-[#000827]"}>
                <h1 className={"font-bold text-3xl tracking-wider mb-3"}>{title.toUpperCase()}</h1>

                <div className={" lg:grid grid-cols-2 gap-4"}>
                    <div>
                        <h2 className={" font-bold mb-[23px] tracking-wider text-xs"}>{subTitle.toUpperCase()}</h2>
                        <div className="max-w-[438px] lg:max-w-max">
                            <p className=" ">
                                1. Éditeur du Site : La plateforme #TourAIPDA est éditée par l’AIPDA (Alliance
                                Internationale
                                pour la Promotion du Design en Afrique), association loi 1901, enregistrée sous le
                                numéro
                                W772011095 et située au 62 Avenue de Meaux, 77000 Melun.
                                Directeur de la publication : Élie Kouamé, Président de l’AIPDA. Contact :
                                info@aipda-design.org, +33 (0)973359268. 2. Hébergeur du Site :
                                La plateforme #TourAIPDA est hébergée par IONOS. Site web : https://www.ionos.com/
                                3. Propriété intellectuelle : Tous les contenus présents sur la plateforme #TourAIPDA
                                sont
                                la
                                propriété exclusive de l’AIPDA ou de leurs auteurs respectifs et protégés par les lois
                                en
                                vigueur. Toute reproduction ou modification est interdite sans autorisation écrite. 4.
                                Données
                                personnelles :
                                L’AIPDA s’engage à protéger vos données conformément au RGPD. Vous disposez de droits
                                d’accès,
                                rectification et suppression en nous contactant à info@aipda-design.org.
                                5. Responsabilité : L’AIPDA ne peut garantir l’exactitude des contenus et ne saurait
                                être
                                tenue
                                responsable des dommages résultant de l’utilisation du site. 6. Liens hypertextes : La
                                plateforme peut contenir des liens vers des sites tiers. L’AIPDA décline toute
                                responsabilité
                                quant à leur contenu.
                                7. Modification des mentions légales : L’AIPDA se réserve le droit de modifier ces
                                mentions
                                légales à tout moment. 8. Loi applicable : Ces mentions légales sont régies par la loi
                                française. Tout litige sera soumis aux tribunaux français.
                            </p>

                        </div>

                    </div>
                    <div>
                        <h2 className={" font-bold mt-[23px] mb-[23px] tracking-wider max-w-[190px] text-xs lg:mt-0 lg:max-w-max"}>{otherTitle.toUpperCase()}</h2>
                        <div className={"max-w-[438px] lg:max-w-max"}>
                            <p>
                                1. Objet : Les présentes CGU définissent les modalités d’utilisation de la plateforme
                                OWOD.
                                2. Acceptation des CGU : L’utilisation de la plateforme implique l’acceptation sans
                                réserve
                                des
                                présentes CGU. 3. Accès à la plateforme :
                                L’accès est ouvert à toute personne disposant d’une connexion Internet. 4. Inscription
                                et
                                compte
                                utilisateur : La création d’un compte peut être nécessaire pour accéder à certaines
                                fonctionnalités. 5. Utilisation de la plateforme :
                                L’utilisateur s’engage à respecter les lois en vigueur et les présentes CGU. 6.
                                Propriété
                                intellectuelle :
                                Tous les contenus de la plateforme sont protégés par les lois sur la propriété
                                intellectuelle.
                                7. Responsabilité de l’utilisateur: L’utilisateur est seul responsable des contenus
                                qu’il
                                publie
                                sur la plateforme. 8. Limitation de responsabilité :
                                L’AIPDA ne peut être tenue responsable des interruptions ou dysfonctionnements.
                                9. Données personnelles : L’utilisation de la plateforme implique la collecte et le
                                traitement
                                de certaines données personnelles.
                                10. Résiliation : L’AIPDA se réserve le droit de suspendre ou supprimer un compte
                                utilisateur en
                                cas de non-respect des CGU. 11. Modification des CGU : Les CGU peuvent être modifiées à
                                tout
                                moment et s’appliquent dès leur publication.
                                12. Loi applicable : Les CGU sont régies par la loi française. Les litiges seront soumis
                                aux
                                tribunaux français.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
};

export default MentionLegal;
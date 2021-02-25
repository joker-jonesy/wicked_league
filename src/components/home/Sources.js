import React from 'react';

function Sources(){

    let sources = [
        "Maine, A. (2020, August). Wicked League Standings and Stats. Retrieved February 22, 2021, from https://docs.google.com/spreadsheets/d/104mG1aaV5AAW36lX-Y9EKGONzEb1QQccMFPkX7IomB0/edit?usp=sharing",
        "P. (2019, August 28). Yzma Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg248215?response-content-disposition=inline%3B%20filename%3D%22Yzma_Villain_Guide.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T163947Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=2239386b0235282c46f9945ae1142c2ff79edf73af9e8c482619c3472d01dc48",
        "P. (2019, July 24). Ratigan Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg244370?response-content-disposition=inline%3B%20filename%3D%22DVE2_Ratigan_VillainGuide_190123_lowres.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T164225Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=3e349682789131ffca2567bbb68fe0f0dfb540a4d75217d10ecb220ef8c3ed3d",
        "P. (2019, July 24). Scar Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg244371?response-content-disposition=inline%3B%20filename%3D%22DVE2_Scar_VillainGuide_190123_lowres.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T164109Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=9e63d9b315518771c4f845bc69ed69432b20302f4f8060bdc2fa9c5d47d39882",
        "P. (2019, March 4). Dr. Facilier Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg234409?response-content-disposition=inline%3B%20filename%3D%22DVE_DrFaciler_VillainGuide_USe01_lowres_%281%29.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T163635Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=00172110c9c8d413df8e48d6126956c8af00cf4c17b16a56c003249e5597a15b",
        "P. (2019, March 4). Evil Queen Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg234410?response-content-disposition=inline%3B%20filename%3D%22DVE_EvilQueen_VillainGuide_USe01_lowres_%281%29.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T163523Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=94932e3251a4300eb5417a0adaa54f0826ecc22ff7aa6753f0639ef61545c51b",
        "P. (2019, March 4). Hades Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg234411?response-content-disposition=inline%3B%20filename%3D%22DVE_Hades_VillainGuide_USe01_lowres_%281%29.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T163350Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=fad19ebf9a83f42e5ae914bb7ea80d81899599f03ecec14497187f456cf99df0",
        "P. (2020, July 28). Cruella Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg276560?response-content-disposition=inline%3B%20filename%3D%22Cruella.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T163140Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=18d203be78c261b32000286f5b085bb6db5dd5ac814ec1dbd28a0e14b27c5544",
        "P. (2020, July 28). Mother Gothel Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg276561?response-content-disposition=inline%3B%20filename%3D%22Mother_Gothel.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T162808Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=6e832646ec8b77cb2bc66cede5431f1c603d9a33c32d6340bfade3d2f98c0484",
        "P. (2020, July 28). Pete Villain Guide. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg276562?response-content-disposition=inline%3B%20filename%3D%22Pete.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T162420Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=8409c62802a3e6225508aea65dcfb0dc2d7a276c749472f1f4573d912d382f68",
        "R., &amp; K. (2018, July 20). Disney Villainous VIllain Guides. Retrieved February 22, 2021, from https://s3.amazonaws.com/geekdo-files.com/bgg217632?response-content-disposition=inline%3B%20filename%3D%22DV_Villainous_60001739_Guides.pdf%22&amp;response-content-type=application%2Fpdf&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20210222%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20210222T164415Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=120&amp;X-Amz-Signature=28547d5cbe2077c0810cfe48cfdc73c00b8f5dee734662bbc3316d3567e4546e",

    ];

    let sourcesEles = sources.map((src, idx)=>
        <div className={"source"} key={idx}>{src}</div>

    )

    return(
        <div className={"citedSources"}>
            <h1>Works Cited</h1>
            {sourcesEles}

        </div>
    )
}

export default Sources
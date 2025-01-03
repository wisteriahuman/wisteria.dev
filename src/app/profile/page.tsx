import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import Techs from "@/components/techs/Techs";
import HobbyInterests from "@/components/hobbyInterests/hobbyInterests";
import Twitter from "@/components/sns/twitter";
import GitHub from "@/components/sns/github";
import AtCoder from "@/components/sns/atcoder";

export const metadata = {
    title: "Profile | WisteriaHub",
    description: "プロフィールページ | WisteriaHub",
}

export default function Profile() {

    return (
        <>
            <Box sx={{ padding: 4, color: "#ffcdff"}}>
                <Grid2 container spacing={4} alignItems="center">
                    <Grid2 sx={{ xs: 12, sm: 8 }}>
                        <Box sx={{ position: "relative", width: 140, height: 140, backgroundColor: "secondary.light", borderRadius: "50%" }}>
                            <Image
                                src="/images/my_image.png"
                                alt="プロフィール画像"
                                layout="fill"
                                objectFit="cover"
                                style={{ borderRadius: "50%" }}
                            />
                        </Box>
                    </Grid2>
                    <Grid2 sx={{ xs: 12, sm: 8 }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: "bold",
                            }}
                            gutterBottom
                        >
                            wisteria
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 2 }}>
                            <Twitter />
                            <GitHub />
                            <AtCoder />
                        </Box>
                        <Typography variant="body1" component="p">
                            こんにちは！wisteriaです。現在、公立はこだて未来大学1-Hです。
                            <br />
                            2024年4月からプログラミングを始め、いろいろな技術を学んでいます。
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container spacing={4} alignItems="center">
                    <Grid2
                        sx={{
                            backgroundColor: "#2d1e36",
                            padding: 2,
                            border: "2px solid #cc00cc",
                            borderRadius: "8px",
                            marginTop: 4,
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            技術スタック
                        </Typography>
                        <Techs />
                    </Grid2>
                    <Grid2
                        sx={{
                            backgroundColor: "#2d1e36",
                            padding: 2,
                            border: "2px solid #cc00cc",
                            borderRadius: "8px",
                            marginTop: 4,
                        }}
                    >
                        <HobbyInterests />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}
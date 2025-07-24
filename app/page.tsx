'use client';

import GameScreen from '@/components/GameScreen';
import Landing from '@/components/Landing';
import {useMemoryGameContext} from '@/context';

export default function Home() {
    const {showGameScreen} = useMemoryGameContext();

    return (
        <main className="bg-background flex flex-col items-center justify-center">
            {!showGameScreen ? <Landing /> : <GameScreen />}
        </main>
    );
}

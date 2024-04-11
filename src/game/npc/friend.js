function spawnFriend(friend)
{
    const idle =(flipPlayer) => {

        friend.use(sprite(friendIdle))  
        friend.play(ANIM_IDLE)  
        friend.flipX = flipPlayer 
    }


    //idle(false)
}
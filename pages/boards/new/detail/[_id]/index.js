import { useQuery, gql } from "@apollo/client";
import style from "./detail.module.css";
import { useRouter } from "next/router";

    const FETCH_BOARD = gql`
        query fetchBoard($boardId: ID!){
            fetchBoard(boardId: $boardId){
                title
                writer
                contents
            }   
        }
        
    `

export default function DetailPage() {

    const router = useRouter()
    console.log("router", router)
    const {fetchBoard} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: Number(router.query._id)
        }
    })
    
    console.log("fetchBoard", fetchBoard)
    const onMouseOverLocation = () => {
        alert("이거")
    }

    return(
        <div className={style.board_box}>
            <div className={style.board}>
                <div>
                    <div className={style.user_box}>
                        <div className={style.user_box_left}>
                            <div className={style.user_profile}>
                                <img src="/profile.png" alt="프로필 사진"/>
                            </div>
                            <div className={style.user_left_imfor}>
                                <p>오진원</p>
                                <p>2024-05-44</p>
                            </div>
                        </div>
                        <div className={style.user_box_right}>
                            <div>
                                <img src="/link.png"/>
                            </div>
                            <div className={style.addressBox}>    
                                <img onMouseOver={onMouseOverLocation} src="/location.png"/>
                            </div>
                        </div>
                        <div className={style.address}>
                            <img src="/addressBox.png"/>
                        </div>
                    </div>
                    <div className={style.titleBox}>
                        <p>게시글 제목입니다.</p>
                    </div>
                    <div className={style.imgBox}>
                        이미지
                    </div>
                    <div className={style.contentBox}><p>내용</p></div>
                    <div className={style.voideBox}>
                        <div>동영상</div>
                    </div>
                    <div className={style.likeBox}>
                        <div>
                            <div>좋아여</div>
                            <div>싷어요</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
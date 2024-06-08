import DaumPostcodeEmbed from "react-daum-postcode"
import styles from "./Board.module.css"
import {Button} from "./BoardWrite.style"
import { IBoardWritePropsUI } from "./BoardWrite.types"
import { Modal } from "antd"

export default function BoardWriteUI(props: IBoardWritePropsUI) {
console.log("props", props)
console.log("props.data?.fetchBoard",props.data?.fetchBoard)
    return(
        <div className={styles.board_box}>
            {/* 밑에 */}
            <div className={styles.board}>
                <div className={styles.board_content}>
                    <div className={styles.board_title}>
                        <p>게시물 {props.isEdit ? "수정" : "등록"}</p>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <label htmlFor="name">작성자</label>
                            <input className={styles.boardInput} 
                                id="name" 
                                type="text" 
                                placeholder="이름을 적어주세요"  
                                onChange={props.onChangeName} 
                                defaultValue={props.data?.fetchBoard.writer ?? ""} 
                                readOnly={!!props.data?.fetchBoard.writer}
                            />
                            <p className={styles.errorMsg}>{props.errName}</p>
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="password">비밀번호</label>
                            <input className={styles.boardInput} id="password" type="password" placeholder="비밀번호를 입력해주세요"  onChange={props.onChangePassword}/>
                            <p className={styles.errorMsg}>{props.errPassword}</p>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <p className={styles.title_01}>제목</p>
                        <input className={styles.boardInput} type="text" placeholder="제목을 입력해주세요" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
                        <p className={styles.errorMsg}>{props.errTitle}</p>
                    </div>
                    <div className={styles.content}>
                        <p>내용</p>
                        <textarea placeholder="내용을 작성해주세요" onChange={props.onChangeContent} defaultValue={props.data?.fetchBoard.contents}></textarea>
                        <p className={styles.errorMsg}>{props.errContent}</p>
                    </div>
                    <div className={styles.address_box}>
                        <p>주소</p>
                        <div className={styles.address}>
                            <input className={styles.address_number} type="text" readOnly value={props.zipcode === "" ? props.data?.fetchBoard.boardAddress.zipcode : props.zipcode}/>
                            <div>
                                <input onClick={props.onClickAddressSearch} className={styles.address_serch_btn} type="button" value="우편번호 검색"/>
                                {
                                    props.isOpen && (
                                        <Modal title="주소검색"  open={true} onOk={props.onToggleModal} onCancel={props.onToggleModal}>
                                            <DaumPostcodeEmbed onComplete={props.onCompleteAddreSearch}/>
                                        </Modal>
                                    )
                                }
                            </div>
                        </div>
                        <div className={styles.address_box_input}>    
                            <input type="text" readOnly value={props.address !== "" ?  props.address : props.data?.fetchBoard.boardAddress?.address ?? ""}/>
                            <input type="text" onChange={props.onChangeAddressDetail} defaultValue={ props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}/>
                        </div>
                    </div>
                    <div className={styles.youtube_box}>
                        <p>유튜브</p>
                        <input type="text" placeholder="링크를 작성해주세요" onChange={props.onChangeYoutubeUrl} defaultValue={props.data?.fetchBoard.youtubeUrl}/>
                    </div>
                    <div className={styles.flie_box}>
                        <p>사진 첨부</p>
                        <div className={styles.file_box_upload}>
                            <input type="file"/>
                            <input type="file"/>
                            <input type="file"/>
                        </div>
                    </div>
                    <div className={styles.main_set}>
                        <p>메인 설정</p>
                        <div className={styles.main_set_content}>
                            <input type="radio" id="유튜브"/>
                            <label htmlFor="유튜브">유튜브</label>
                            <input type="radio" id="사진"/>
                            <label htmlFor="사진">사진</label>
                        </div>
                    </div>
                    <div className={styles.insert_btn_box}>
                        <Button 
                            onClick={props.isEdit ? props.onClickUpdate : props.onClickBtn} 
                            isActive={props.isEdit ? true : props.isActive}
                        >
                            {props.isEdit ? "수정": "등록"}하기
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
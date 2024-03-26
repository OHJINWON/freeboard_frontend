import styles from "./Board.module.css"

export default function BoardInsertPage() {
    

    return (
        <div className={styles.content}>
            {/* 밑에 */}
            <div className={styles.border}>
                <div className={styles.border_content}>
                    <div className={styles.title}>
                        <p>게시물 등록</p>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <label htmlFor="name">작성자</label>
                            <input id="name" type="text" placeholder="이름을 적어주세요"/>
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="password">비밀번호</label>
                            <input id="password" type="password" placeholder="비밀번호를 입력해주세요"/>
                        </div>
                    </div>
                    <div>
                        <p>제목</p>
                        <input type="text" placeholder="제목을 입력해주세요"/>
                    </div>
                    <div>
                        <p>내용</p>
                        <textarea placeholder="내용을 작성해주세요"></textarea>
                    </div>
                    <div>
                        <p>주소</p>
                        <input type="number"/>
                        <button>우편번호 검색</button>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <div>
                        <p>유튜브</p>
                        <input type="text" placeholder="링크를 작성해주세요"/>
                    </div>
                    <div>
                        <p>사진 첨부</p>
                        <div>
                            <input type="fild"/>
                            <input type="fild"/>
                            <input type="fild"/>
                        </div>
                    </div>
                    <div>
                        <p>메인 설정</p>
                        <div>
                            <input type="radio" id="유튜브"/>
                            <label htmlFor="유튜브">유튜브</label>
                            <input type="radio" id="사진"/>
                            <label htmlFor="사진">사진</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
package com.thirty.insitewriteservice.write.dto;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@JsonNaming(value = PropertyNamingStrategies.SnakeCaseStrategy.class)
public class DataReqDto {
	@NotNull
	private String cookieId;
	@NotNull
	private String currentUrl;
	@NotNull
	private String beforeUrl;
	@NotNull
	private String referrer;
	@NotNull
	private String language;
	@NotNull
	private String responseTime;
	@NotNull
	private String osId;
	@NotNull
	private boolean isNew;
	@NotNull
	private String applicationToken;
	@NotNull
	private String activityId; // dummy 값 받아서 추후 계산해야합니다.

	//마이에스큐엘 검증과정도 추가하기
	//쿠키 아이디중 가장 마지막 접속 가져와서 30분 지나면 새로운 액이티비 부여
	// 아니면 원래 기존값 넣기


}

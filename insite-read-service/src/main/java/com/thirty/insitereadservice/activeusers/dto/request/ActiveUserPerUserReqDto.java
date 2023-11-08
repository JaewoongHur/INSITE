package com.thirty.insitereadservice.activeusers.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActiveUserPerUserReqDto {
    @NotNull(message = "통계 시작 시간을 기입해주세요.")
    private LocalDateTime startDate;

    @NotNull(message = "통계 끝 시간을 기입해주세요.")
    private LocalDateTime endDate;

    @NotNull(message = "앱 토큰을 기입해주세요.")
    private String applicationToken;
}

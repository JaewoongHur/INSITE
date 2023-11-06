package com.thirty.insitereadservice.buttons.dto.request;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ExitPercentageReqDto {

    @NotNull(message = "시작시간을 기입해 주세요")
    private LocalDateTime startDate;

    @NotNull(message = "끝 시간을 기입해 주세요")
    private LocalDateTime endDate;

    @NotNull(message = "버튼이름을 기입해 주세요")
    private String buttonName;

    @NotNull(message = "앱 토큰을 기입해 주세요")
    private String applicationToken;
}
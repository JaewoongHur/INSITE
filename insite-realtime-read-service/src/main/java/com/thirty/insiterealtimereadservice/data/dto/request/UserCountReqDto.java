package com.thirty.insiterealtimereadservice.data.dto.request;

import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserCountReqDto {
    @NotNull(message = "앱 토큰을 기입해주세요.")
    private String applicationToken;

}

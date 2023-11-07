package com.thirty.insitereadservice.users.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PageViewResDto {
    private int pageView;

    public static PageViewResDto create(int pageView){
        return PageViewResDto.builder()
            .pageView(pageView)
            .build();
    }
}

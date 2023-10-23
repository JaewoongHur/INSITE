package com.thirty.ggulswriting.room.service;

import com.thirty.ggulswriting.room.dto.request.RoomParticipateReqDto;
import com.thirty.ggulswriting.room.dto.response.RoomMemberResDto;
import com.thirty.ggulswriting.room.dto.response.RoomResDto;

public interface RoomService {
	String participate(RoomParticipateReqDto roomParticipateReqDto, int memberId);

	void out(int roomId, int memberId);

	RoomMemberResDto getMemberList(int roomId);

	RoomResDto getMyRoomList(int memberId);
}
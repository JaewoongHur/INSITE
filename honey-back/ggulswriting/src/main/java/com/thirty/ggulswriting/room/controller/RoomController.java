package com.thirty.ggulswriting.room.controller;

import com.thirty.ggulswriting.message.dto.response.MessageListResDto;
import com.thirty.ggulswriting.room.dto.request.RoomParticipateReqDto;
import com.thirty.ggulswriting.room.dto.response.RoomDetailResDto;
import com.thirty.ggulswriting.room.dto.response.RoomMemberResDto;
import com.thirty.ggulswriting.room.dto.response.RoomResDto;
import com.thirty.ggulswriting.room.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/rooms")
public class RoomController {

	private final RoomService roomService;

	@PostMapping("/participate")
	public ResponseEntity<String> participate(
		@Valid @RequestBody RoomParticipateReqDto roomParticipateReqDto
	) {
		int memberId = 1;
		String result = roomService.participate(roomParticipateReqDto, memberId);
		return ResponseEntity.status(HttpStatus.OK).body(result);
	}

	@PatchMapping("/{roomId}/out")
	public ResponseEntity<Void> out(
		@Valid @PathVariable int roomId
	){
		int memberId = 1;
		roomService.out(roomId,memberId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/{roomId}/member-list")
	public ResponseEntity<RoomMemberResDto> getMemberList(
		@Valid @PathVariable int roomId
	){
		RoomMemberResDto roomMemberResDto = roomService.getMemberList(roomId);
		return new ResponseEntity<>(roomMemberResDto, HttpStatus.OK);
	}

	@GetMapping("/list")
	public ResponseEntity<RoomResDto> getRoomList(
	){
		int memberId = 1;
		RoomResDto roomResDto = roomService.getMyRoomList(memberId);
		return new ResponseEntity<>(roomResDto, HttpStatus.OK);
	}

	@GetMapping("/{roomId}/message-list")
	public ResponseEntity<MessageListResDto> getMessageList(
		@Valid @PathVariable int roomId
	){
		int memberId = 1;
		MessageListResDto messageListResDto = roomService.getMyMessageList(memberId, roomId);
		return new ResponseEntity<>(messageListResDto, HttpStatus.OK);
	}

	@GetMapping("/{roomId}")
	public ResponseEntity<RoomDetailResDto> roomDetail(
		@Valid @PathVariable int roomId
	){
		RoomDetailResDto roomDetailResDto = roomService.getRoomDetail(roomId);
		return new ResponseEntity<>(roomDetailResDto, HttpStatus.OK);
	}
}

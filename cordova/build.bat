@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
SET old=-build
SET new=-live
for %%f in (*config-build*) do (
	SET newname=%%f
	SET newname=!newname:%old%=!
	if exist !newname! (
		SET temp=%%f
		move "!newname!" "!temp:%old%=%new%!"
	)
	move "%%f" "!newname!"
)
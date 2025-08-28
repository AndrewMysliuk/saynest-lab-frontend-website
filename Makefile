IMAGE_NAME=saynest-lab-frontend-website
CONTAINER_NAME=frontend-website-container
PORT=3000

docker_build:
	docker build -t $(IMAGE_NAME) .

docker_run_local:
	docker run -d \
		--rm \
		-p $(PORT):80 \
		--name $(CONTAINER_NAME) \
		$(IMAGE_NAME)

stop:
	-docker stop $(CONTAINER_NAME)
	-docker rm $(CONTAINER_NAME)

clean_all:
	-docker rm -f $(CONTAINER_NAME) || true
	-docker rmi -f $(IMAGE_NAME) || true
	-docker volume prune -f
	-docker system prune -f --volumes
